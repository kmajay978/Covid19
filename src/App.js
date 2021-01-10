import React, {Component} from 'react';
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData} from './api'
import coronaImage from './images/covid1.jpg'
class App extends Component{

    state={
        data:{},
        country:''
    }

    handleCountryChange=async (country)=>{
        console.log(country);
        const fetchedData=await fetchData(country);
        this.setState({data:fetchedData,country:country});
        console.log(fetchedData);
    }
    async componentDidMount(){
        const fetchedData=await fetchData();
        console.log(fetchedData);
        this.setState({data:fetchedData});
    }
    render(){
       const {data,country}=this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
            </div>
        )
    }
}
export default App