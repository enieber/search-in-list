const search = (list, word) => {
  return list.filter(item => {
    let listWithWord = item.name.includes(word);
    if (listWithWord) {
      let fullName = item.name.split(' ');
      let fisrtName = fullName[0];
      let lastName = fullName[1];
      if (fisrtName.charAt(0) == word.charAt(0) || lastName.charAt(0) == word.charAt(0)) {
        return true;
      }
      return false;
    }
    return listWithWord;
  });
};

module.exports = search;

