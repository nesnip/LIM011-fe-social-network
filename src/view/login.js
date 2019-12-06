export default () => {
  const form = document.createElement('form');
  const formContent = `
    <form class="login-container">
    <h2> FitnesSpace </h2>
    <input type="text"> Email
    <input type="text"> Password
    <button> Sign In </button>
    </form>`;
  divElemt.classList.add('position');
  form.innerHtml = formContent;
  return form;
}
;