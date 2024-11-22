import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/main-header/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Spinner from "@/components/spinner/spinner";

export const metadata = {
  title: "Al lmeals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highliht}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
         <Suspense fallback={<Spinner />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
