

  var signin = document.getElementById('signin')

  signin.addEventListener('click', async function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value



    try {
      const axiosResponse = await axios.post(`/api/v1/login/${email}`, {
          password: password,
      })

      if (axiosResponse.data.userLoggedIn) {


        location.href = `loggedin.html`;

      }



  } catch {

      console.log("error");

  }



  })