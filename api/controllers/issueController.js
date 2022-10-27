import Issue from "../models/Issue.js";
import User from "../models/User.js";
import Book from "../models/Book.js";
import Activity from "../models/Activity.js";

export const createIssue = async (req, res, next) => {
  try {
    const issue = new Issue(req.body);
    await issue.save();

    const book = await Book.findById({ _id: issue.book });
    if (book.stock > 0) {
      book.stock -= 1;
      book.issue.push(issue);

      await book.save();
    } else {
      res.status(400).json({ success: false, message: "Stock is empty" });
    }
    const user = await User.findById({ _id: issue.user });
    if (user.issue.length < 3) {
      user.issue.push(issue);

      await user.save();

      const userBook = await User.findById({ _id: issue.user });
      userBook.books.push(book);
      await userBook.save();

      res.status(200).json({ success: true, data: issue });
    } else {
      res
        .status(400)
        .json({
          success: false,
          message: "Issued Books has reached the limit",
        });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getIssues = async (req, res, next) => {
  try {
    const issue = await Issue.find();
    res.status(200).json(issue);
  } catch (err) {
    next(err);
  }
};



export const returnBook = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    const user = await User.findById({ _id: issue.user });

    // await user.remove();

    const book = await Book.findById({ _id: issue.book });
    book.stock += 1;
    if(book.stock>book.total){
        res.status(400).json({ success:false,message:'You have returned more than the total amount of books.' });
    }
issue.return==true;
    await book.save();
issue.returnDate===Date.now()- 7 * 24 * 60 * 60 * 1000


    res.status(200).json({ success: true, message: "Book marked as returned" });
  } catch (err) {
    next(err);
  }
};


