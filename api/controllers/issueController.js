import Issue from "../models/Issue.js";
import User from "../models/User.js";
import Book from "../models/Book.js";

export const createIssue = async (req, res, next) => {
  try {
    const issue = new Issue(req.body);
    await issue.save();
    const book = await Book.findById({ _id: issue.book });
    //check book stock
    if (book.stock > 0) {
      book.stock -= 1;
      book.issue.push(issue);
      await book.save();
      
      const user = await User.findById({ _id: issue.user });
      // check if the response is sent to the user
      if (res.headersSent !== true && user.issue.length >= 3) {
        res.status(400).json({
          success: false,
          message: "Issued Books has reached the limit",
        });
        return;
      }  else if (user.violationFlag == true) {
          res.status(400).json({
            success: false,
            message:
              "You haven't return the overdue book. Please check the return date!",
          });
        } else {
        //populate the user with issue data
        user.issue.push(issue);
        //populate the issue with book data
        await issue.populate("book", "title author ISBN stock");
        await user.save();
        const userBook = await User.findById({ _id: issue.user });
        //populate user with issued book data
        userBook.books.push(book);
        await userBook.save();
        await issue.populate("user", "fullname surname email");
        res.status(200).json({ success: true, data: issue });

      
      }
    } else {
      res.status(400).json({ success: false, message: "Stock is empty" });
      return;
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};



export const getIssues = async (req, res, next) => {
  try {
    const issue = await Issue.find()
      .populate("user", "fullname surname email issue")
      .populate("book", "title author ISBN stock");

    res.status(200).json(issue);
  } catch (err) {
    next(err);
  }
};

export const issuePagination = async (req, res) => {
  try {
    let query = Issue.find()
      .populate("user", "fullname surname email issue")
      .populate("book", "title author ISBN stock");

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * pageSize;
    const total = await Issue.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

export const deleteIssue = async (req, res, next) => {
  try {
    const issue = await Issue.find();

    await Issue.findByIdAndDelete(req.params.id);
    const book = await Book.find();
    const user = await User.find();
    book.stock += 1;
    delete user.issue;
    res.status(200).json("Issue is deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const returnBook = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    const user = await User.findById(issue.user);

    issue.isReturned = true;
    user.issue.pull(issue._id); // remove the issue from the user's issue list
    const book = await Book.findById(issue.book);
    book.stock += 1;
    if (book.stock > book.total) {
      res.status(400).json({
        success: false,
        message: "You have returned more than the total amount of books.",
      });
      return;
    }

    await book.save();
    await user.save();
    await issue.save();

    user.violationFlag = false;
    await user.save();

    res.status(200).json({ success: true, message: "Book marked as returned" });
  } catch (err) {
    next(err);
  }
};


export const getSearchIssue = async (req, res, next) => {
  try {
    const searchIssue = await Issue.find({
      $or: [
        { books: { $regex: req.params.key } },
        { fullname: { $regex: req.params.key } },
      ],
    });
    res.status(200).json(searchIssue);
  } catch (err) {
    next(err);
  }
};

export const getReturned = async (req, res, next) => {
  try {
    const issue = await Issue.find();

    if (issue.return == true) {
      res.status(200).json(issue);
    }
  } catch (err) {
    next(err);
  }
};

export const checkOverdue = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate("issue");

    const currentDate = new Date();
    let overdueBooks = [];

    for (const issue of user.issue) {
      const returnDate = new Date(issue.returnDate);
      const diffInMs = returnDate - currentDate;
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      const issueBook = await Issue.find(issue);
      if (diffInDays < 0) {
        overdueBooks.push(issueBook.book);
        user.violationFlag = true;
        await user.save();
      }
    }
    if (overdueBooks.length > 0) {
      {
        res.status(200).send("You have overdue books, check the returned date");
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const notifyIssue = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate("issue");

    const issueDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    let overdueBooks = [];

    for (const issue of user.issue) {
      const returnDate = new Date(issue.returnDate);
      const diffInMs = returnDate - currentDate;
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      const issueBook = await Issue.find(issue);
      if (diffInDays < 0) {
        overdueBooks.push(issueBook.book);
        user.violationFlag = true;
        await user.save();
      }
    }

    if (overdueBooks.length > 0) {
      {
        res.status(200).send("You have overdue books, check the returned date");
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const getIssue = async (req, res, next) => {
  try {
    // const user = await  User.findById(req.params.id)
    const issue = await Issue.find({ user: req.params.id }).populate(
      "book",
      "title author"
    );
    res.status(200).json(issue);
  } catch (err) {
    next(err);
  }
};
export const getReturnedIssue = async (req, res, next) => {
  try {
    const issue = await Issue.find({ user: req.params.id, isReturned: false }).populate(
      "book",
      "title author"
    );
    res.status(200).json(issue);
  } catch (err) {
    next(err);
  }
};