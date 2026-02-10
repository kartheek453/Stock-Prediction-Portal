import Buttons from "./Buttons"
const Main =()=>{
    return(
        <>
        <div className="container pt-5">
        <div className="container center pt-2 pb-5 rounded text-center bg-color"> 
            <h1 className="text-light">Stock Prediction Portal</h1>
            <p className="text-light lead">This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
            <Buttons text='Login' class="btn-outline-info" />

        </div>
        </div>
        </>
    )
}
export default Main