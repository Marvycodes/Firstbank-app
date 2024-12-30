setForm2((el) => {
    if (el.password2.length >= 6) {
      for (let i = 0; i < el.password2.length; i++) {
        const element = el.password2[i];
        
      }
    } else { 
      return el;
    }
  });