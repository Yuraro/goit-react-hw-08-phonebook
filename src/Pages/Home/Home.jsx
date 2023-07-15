import css from "./Home.module.css";

const Home = () => {
return (
    <div className={css.home__container}>
    <p className={css.home__title}>
        Welcome to the Private Phonebook web.
        <br/>This project was created for educational purposes, where you can register and create your own contact book.
    </p>
    </div>
);
};

export default Home;