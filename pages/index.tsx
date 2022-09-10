import Categories from "../components/Home/CategoriesList";
import HomeSearch from "../components/Home/HomeSearch";
import Wun from "../components/Home/Wun";
import MainLayout from "../layouts/MainLayout";
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <MainLayout>
        <HomeSearch />
        <Categories />
      </MainLayout>
    </>
  );
}