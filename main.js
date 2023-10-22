    function Whatsapp(){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message'). value;
      
      var whatsappurl="https://wa.me/2349154489651?text="
      + "Name:" +name + "%0a"
      + "Email:" + email + "%0a"
      + "Message:" + message;
      
      window.open(whatsappurl,"_blank").focus();
    }