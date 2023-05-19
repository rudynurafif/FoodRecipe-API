import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipe found for your query! Please try another one..`;
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();
