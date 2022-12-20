import Component from  './component.js';
import Banner from  './banner.js';
import Grid from  './grid.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.whichTurn = "O";
        this.banner = new Banner(root.querySelector('.banner'));
        this.grid = new Grid(root.querySelector('.grid'));
        this.grid.on('click', this.handleCellClick.bind(this));
        this.grid.on('finish', this.handleFinishGame.bind(this));
        // TODO:
        // In this constructor, you should new a Reset component and handle its fire event here.



        this.grid.setTurn(this.whichTurn);
    }

    handleCellClick() {
        // TODO:
        // In this function, you should handle the cell click,
        // including setting self property and calling child components' methods(setTurn).


    }

    handleFinishGame(firer, mode) {
        if(mode === "win")
            this.banner.setScore(this.whichTurn);

        this.whichTurn = "O";
        this.grid.reset(this.whichTurn);
        this.banner.turn.setTurn(this.whichTurn);
    }
    handleResetClick() {
        // TODO:
        // In this function, you shoud reset self property and calling child components' methods(reset).

        
    }
}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
