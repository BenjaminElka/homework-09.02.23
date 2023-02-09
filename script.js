class FormData {
    constructor() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.address = "";
      this.comment = "";
    }
  }
  
  class FormHandler {
    constructor() {
      this.formData = new FormData();
    }
    
    loadFormData() {
      let formData = JSON.parse(localStorage.getItem("formData"));
      if (formData) {
        this.formData = formData;
      }
    }
    
    saveFormData() {
      localStorage.setItem("formData", JSON.stringify(this.formData));
    }
    
    handleSubmit(event) {
      event.preventDefault();
      this.formData.name = document.getElementById("name").value;
      this.formData.email = document.getElementById("email").value;
      this.formData.phone = document.getElementById("phone").value;
      this.formData.address = document.getElementById("address").value;
      this.formData.comment = document.getElementById("comment").value;
      this.saveFormData();
    }
    
    updateForm() {
      document.getElementById("name").value = this.formData.name;
      document.getElementById("email").value = this.formData.email;
      document.getElementById("phone").value = this.formData.phone;
      document.getElementById("address").value = this.formData.address;
      document.getElementById("comment").value = this.formData.comment;
    }
  }
  
  let formHandler = new FormHandler();
  formHandler.loadFormData();
  formHandler.updateForm();

  