function telephoneCheck(str) {
  let myRegex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
  let myRegex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if(myRegex1.test(str)) {
    return true;
  } else {
    return myRegex2.test(str) ? true : false;
  }
}
