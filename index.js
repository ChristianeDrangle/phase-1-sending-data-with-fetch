function submitData(name, email) {
  const submitData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }

  return fetch("http://localhost:3000/users", submitData)
  .then((response) => response.json()) 
  .then ((person) => {
    document.body.textContent=person.id
  })
  .catch((error) => {document.body.textContent=error.message})
  }
  
submitData("Monica", "Wills@test.com")
