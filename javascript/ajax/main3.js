axios.get('https://api.github.com/users/patrickmaciel')
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.warning(error);
});