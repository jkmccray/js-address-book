const addressList = document.querySelector(".addressList")

// element factory function
const elFactory = (elType, attributesObj, txt) => {
  const newEl = document.createElement(elType)
  for (let attribute in attributesObj) {
    if (attribute === "classes") {
      const classesArray = attributesObj[attribute]
      classesArray.forEach(cls => {
        newEl.classList.add(cls)
      });
    }
    else {
      newEl[attribute] = attributesObj[attribute]
    }
  }
  newEl.textContent = txt || null
  return newEl
}

const nameSection = elFactory("fieldset")
const nameLabel = elFactory("label", { for: "fullName" }, "Name ")
const nameInput = elFactory("input", { type: "text", id: "fullName", placeholder: "Enter person's full name", autofocus: true })
const addressSection = elFactory("fieldset")
const addressLabel = elFactory("label", { for: "address" }, "Address ")
const addressInput = elFactory("input", { type: "text", id: "address", placeholder: "Address" })
const saveBtn = elFactory("button", { id: "saveEntry" }, "Save Address")

saveBtn.addEventListener("click", () => {
  /*
      Collect the user put by selecting the input fields, one
      at a time, and accessing the `value` property
  */
  let personName = document.querySelector("#fullName").value
  let personAddress = document.querySelector("#address").value

  // check input fields to make sure they have been filled out by the user 
  // if not, alert the user
  if (personName === "" || personAddress === "") {
    alert("Enter a person and address")
    return
  } else {

    // create elements that include user input to be added to the DOM 
    const addressListItem = elFactory("section")
    const eachName = elFactory("h1", {}, `Name: ${personName}`)
    const eachAddress = elFactory("div", {}, `Address: ${personAddress}`)

    // append elements to the DOM
    addressList.appendChild(addressListItem)
    addressListItem.appendChild(eachName)
    addressListItem.appendChild(eachAddress)

    // empty input values so that user cannot save same entry multiple times
    document.querySelector("#fullName").value = null
    document.querySelector("#address").value = null

    // set focus to the first input to make it more user friendly
    nameInput.focus()
  }
})

addressList.appendChild(nameSection)
nameSection.appendChild(nameLabel)
nameSection.appendChild(nameInput)
addressList.appendChild(addressSection)
addressSection.appendChild(addressLabel)
addressSection.appendChild(addressInput)
addressList.appendChild(saveBtn)


