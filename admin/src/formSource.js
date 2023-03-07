export const userInputs = [
    {
    id:"username",
      label: "Username",
      type: "text",
      errorMessage: "Please enter the username",
      placeholder: "john_doe",
      required: true
    },
    {
    id:"fullname",
      label: "Name",
      type: "text",
      errorMessage: "Name field is empty!",
      placeholder: "John",
      required: true
    },
    {
    id:"surname",
      label: "Surname",
      type: "text",
      errorMessage: "Surname field is empty",
      placeholder: "Doe",
      required: true
     
    },
    {
    id:"email",
      label: "Email",
      type: "mail",
      errorMessage: "Please enter the email",
      pattern:`[a-z0-9]+@[a-z]+.[a-z]{2,3}`,
      placeholder: "john_doe@gmail.com",
      required: true
    },
    {
    id:"telephone_no",
      label: "Phone",
      type: "number",
      errorMessage: "Please enter the phone number",
      placeholder: "+1 234 567 89",
    },
    {
    id:"password",
      label: "Password",
      type: "password",
      errorMessage:    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
   required:true 
    },
    {
      id:"address",
      label: "Address",
      type: "text",
      errorMessage: "Please enter the address",
      placeholder: "Elton St. 216 NewYork",
      required: true
    },
    
    {
      id:"profession",
      label: "Profession",
      type: "text",
      errorMessage: "Profession field is empty!",
     
      placeholder: "Student",
    },
    {
      id:"school",
      label: "School",
      type: "text",
      errorMessage: "School field is empty!",
    
      placeholder: "Harvard University",
      
    },
  ];
  
  export const bookInputs = [
    {
      id: "title",
      label: "Title",
      errorMessage: "Please enter the book title",
      type: "text",
      placeholder: "Book Title",
      required:true
    },
    {
      id: "author",
      label: "Author",
      type: "text",
      errorMessage: "Please enter the book author",
      placeholder: "Author",
      required:true

    },
    {
      id:"description",
            label: "Description",
      type: "text",
   
           
      placeholder: "Description",
    },
    {
    id:"category",
      label: "Category",
      errorMessage: "Please enter the book category",
      type: "text",
      placeholder: "Category",
      required:true

    },

    {
      id: "language",
      label: "Language",
      errorMessage:"Please enter the book language",
      type: "text",
      placeholder: "Language",
    },
    {
      id: "published",
      label: "Published",
      errorMessage:"Please enter the published date",
      type: "text",
      placeholder: "Published",
    },
    {
      id: "ISBN",
      label: "ISBN",
      type: "number",
      errorMessage: "Please enter the ISBN",
      placeholder: "Book ISBN",
      required:true

    },
    {
      id:"stock" ,
      label: "Stock",
      type: "number",
      errorMessage: "Please enter the book stock",
      placeholder: "in stock",
      required:true

    },
    {
      id: "total",
      label: "Available",
      type: "number",
      errorMessage: "Please enter the available book stock",
      placeholder: "Available books",
      required:true

    },
  ];
  