import { useQuery } from "react-query";
import './CoinData.css';

const StockData = () => {

    const order_currency = "BTC";
    const payment_currency = "KRW";
    const {isLoading, error, data, isFetching} = useQuery([order_currency, payment_currency],() => 
        fetch(`https://api.bithumb.com/public/transaction_history/${order_currency}_${payment_currency}`)
            .then((res) => res.json())
            .then((res) => res.data),
            { refetchInterval: 1000 } // 1초마다 갱신
    );

    if(isLoading){
        return <h1>로딩중!</h1>;
    }
    if(error){
        return <h1>에러 발생!</h1>;
    }
    
    return (
    <div id="container">
        <h1>실시간 BTC-KRW 거래 데이터</h1>
        <div id="datas">
            {data.map((el, idx) => {
                return (
                <div className="data" key={idx}>
                    <h1>거래 일시 : {el.transaction_date}</h1>
                    <h2>{el.type === 'bid' ? '입찰' : '요청'}</h2>
                    <h2>현재 가격 : {el.price + " " + payment_currency}</h2>
                    <h2>거래 수량 : {el.units_traded + " " + order_currency}</h2>
                    <h2>거래 금액 : {el.total + " " + payment_currency}</h2>
                </div>);
            })}
        </div>
    </div>);
}

export default StockData;