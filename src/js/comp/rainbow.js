class Rainbow  {

    static colors = [
        {"color": "pink", "p": 100},
        {"color": "purple", "p": 200},
        {"color": "blue", "p": 300},
        {"color": "yellow", "p": 350},
        {"color": "red", "p": 400},
        {"color": "green", "p": 450},
        {"color": "brown", "p": 200}
    ];

    static getRandomColor(){
        return Rainbow.colors[Math.floor(Math.random() * Rainbow.colors.length)]
    }
}

export default Rainbow;