import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            price: 3,
            selectedTeam: 0,

            picks: [null, null, null, null, null, null],

            leftBackground: 'red',
            rightBackground: 'blue',

            questionset: 1

        }

        let player = {
            name: 'jayme',
            strength: 10
        }


        //
        let attributeStrings = ['name', 'strength']


        attributeStrings.forEach((a) => {
            console.log(player[a])
        })


    }


    componentDidMount() {


    }

    // jsx html in javascript
    render() {

        if     (this.state.questionset === 1) {var text = "Tennessee Titans"; var helmet1 ="image/titans2.png"}
        else if(this.state.questionset === 2) {var text = "Tennessee Titans"; var helmet1 ="image/titans.png"}
        else if(this.state.questionset === 3) {var text = "Tennessee Titans"; var helmet1 ="image/titans2.png"}
        else if(this.state.questionset === 4) {var text = "Tennessee Titans"; var helmet1 ="image/titans.png"}
        else if(this.state.questionset === 5) {var text = "Tennessee Titans"; var helmet1 ="image/titans2.png"}
        else if (this.state.questionset >= 6) {var text = "Tennessee Titans"; var helmet1 ="image/titans.png"}

        if     (this.state.questionset === 1) {var text2 = "Kansas City Chiefs"}
        else if(this.state.questionset === 2) {var text2 = "Gansas City Chiefs"}
        else if(this.state.questionset === 3) {var text2 = "Charlies City Chiefs"}
        else if(this.state.questionset === 4) {var text2 = "Yellow City Chiefs"}
        else if(this.state.questionset === 5) {var text2 = "Florida City Chiefs"}
        else if(this.state.questionset === 6) {var text2 = "Zales City Chiefs"}


        return (
            <div id={'app'} style={{display: 'flex', justifyContent: 'center'}} className="App">

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    height: '100%',
                    width: '100%'
                }}>


                    <div style={{padding: 5}}>
                        Pick the winning team:
                    </div>


                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: '50%',
                        width: '100%'


                    }}>




                        <div onClick={
                            this.pickLeft.bind(this)} id={'team1'} className={'side'} style={{backgroundColor: this.state.leftBackground, border: (this.state.selectedTeam === 1 ? '5px solid green' : '5px solid white')  }}>


                            {text}
                            <img src={helmet1}/>



                        </div>

                        <div onClick={this.pickRight.bind(this)} id={'team2'} className={'side'} style={{backgroundColor: this.state.rightBackground, border: (this.state.selectedTeam === 2 ? '5px solid blue' : '5px solid white')}}>
                            <img src={"image/chiefs.png"}/>
                            {text2}

                        </div>


                    </div>


                    <div id={'currentPick'} style={{padding: 50}}>

                        {this.state.selectedTeam===0?'-':'Current Pick: Team ' + this.state.selectedTeam}

                    </div>




                    <div style={{width: '100%', height: 50, display: 'flex', justifyContent: 'center'}}>

                        <div style={{height: 20,  padding: 5, width: 20, borderRadius: 20, border: '3px solid black', backgroundColor:this.state.picks[0]?'yellowgreen':'#525252'}}>

                            {this.state.picks[0]}

                        </div>

                        <div style={{height: 20, padding: 5, width: 20, borderRadius: 20, border: '3px solid black', backgroundColor:this.state.picks[1]?'yellowgreen':'#525252'}}>

                            {this.state.picks[1]}
                        </div>

                        <div style={{height: 20, padding: 5, width: 20, borderRadius: 20, border: '3px solid black', backgroundColor:this.state.picks[2]?'yellowgreen':'#525252'}}>

                            {this.state.picks[2]}
                        </div>

                        <div style={{height: 20, padding: 5, width: 20, borderRadius: 20, border: '3px solid black', backgroundColor:this.state.picks[3]?'yellowgreen':'#525252'}}>

                            {this.state.picks[3]}
                        </div>

                        <div style={{height: 20, padding: 5, width: 20, borderRadius: 20, border: '3px solid black', backgroundColor:this.state.picks[4]?'yellowgreen':'#525252'}}>

                            {this.state.picks[4]}
                        </div>

                        <div style={{height: 20, padding: 5, width: 20, borderRadius: 20, border: '3px solid black', backgroundColor:this.state.picks[5]?'yellowgreen':'#525252'}}>

                            {this.state.picks[5]}
                        </div>
                    </div>



                </div>




            </div>
        )
    }

    pickLeft = () => {
        let picks = this.state.picks

        let found = 0



        picks.forEach((pick,i)=>{

            if (found) {
                return
            }

            if (pick===null) {
                picks[i] = 1
                found = 1
            }
        })

        this.setState({picks: picks})

        this.state.leftbackground = 'yellow'

    }

    pickRight = () => {
        let picks = this.state.picks

        let found = 0

        picks.forEach((pick,i)=>{

            if (found) {
                return
            }


            if (pick===null) {
                picks[i] = 2
                found = 1
            }
        })

        this.setState({picks: picks})

        if(this.state.questionset === 1) {
            this.setState({rightBackground: 'white'})
            this.setState({leftBackground: 'gold'})
            //change the helmet image


            this.setState({questionset: this.state.questionset+1})
        }

        else if(this.state.questionset === 2) {
            this.setState({rightBackground: 'green'})
            this.setState({leftBackground: 'purple'})
            this.setState({questionset: this.state.questionset+1})
        }

        else if(this.state.questionset === 3) {
            this.setState({rightBackground: 'purple'})
            this.setState({leftBackground: 'blue'})
            this.setState({questionset: this.state.questionset+1})
        }

        else if(this.state.questionset === 4) {
            this.setState({rightBackground: 'yellow'})
            this.setState({leftBackground: 'brown'})
            this.setState({questionset: this.state.questionset+1})
        }

        else if(this.state.questionset === 5) {
            this.setState({rightBackground: 'blue'})
            this.setState({leftBackground: 'green'})
            this.setState({questionset: this.state.questionset+1})
        }

        else if(this.state.questionset === 6) {
            this.setState({rightBackground: 'orange'})
            this.setState({leftBackground: 'red'})
            this.setState({questionset: this.state.questionset+1})
        }

    }


    pump() {

        this.setState({price: this.state.price + 1})

    }

}

export default App;
