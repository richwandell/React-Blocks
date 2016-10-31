import Color from './color';

class Rainbow  {

    static colors = [Color.PINK, Color.PURPLE, Color.BLUE, Color.YELLOW, Color.RED, Color.GREEN, Color.BROWN];

    static getRandomColor(){
        return new Color(Rainbow.colors[Math.floor(Math.random() * Rainbow.colors.length)]);
    }
}

export default Rainbow;