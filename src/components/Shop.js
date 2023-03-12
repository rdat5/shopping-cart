import Card from "./Card";

export default function Shop() {
    return (
        <div className="shop-page">
            <div className="item-container">
                <Card itemIndex={0}/>
                <Card itemIndex={1}/>
                <Card itemIndex={2}/>
                <Card itemIndex={3}/>
                <Card itemIndex={4}/>
                <Card itemIndex={5}/>
                <Card itemIndex={6}/>
                <Card itemIndex={7}/>
            </div>
        </div>
    );
};