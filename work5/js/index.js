/*Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты, 
"Заголовок, тело, футер, дата". Создать методы для заполнения и отображения документа.
*/

const documentMy = {
    header: "",
    body: "",
    footer: "",
    data: "",
    application: {
        title: { meaning: '' },
        body: { meaning: '' },
        footer: { meaning: '' },
        data: { meaning: '' }
    },
    givInfo: function () {

        for (key in documentMy) {

          if (typeof (documentMy[key]) == 'string') {
            documentMy[key] = prompt('Заповніть ' + key + ' документа', '');
            document.write(key + ' документа = ' + documentMy[key] + ';<br />');
          }
          else if (typeof (documentMy[key]) == 'object') {

            for (key in documentMy.application) {
              for (keyIn in documentMy.application[key]) {
                documentMy.application[key][keyIn] = prompt('Заповніть ' + key + ' додатку документа ', '');
                document.write('В ' + key + ' додатку документа: ' + documentMy.application[key][keyIn] + ';<br />');
              }
            }

          }
        }
      
    }

}
documentMy.givInfo();

