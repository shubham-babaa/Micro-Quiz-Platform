import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default async function Page() {
  const res = await fetch(`${process.env.PUBLIC_API_BASE_URL}/categories`, {});

  const data = await res.json();
  const categories: any[] = data.categorie;


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.brand}>Micro-Quiz</span>
          </h1>
          <p className={styles.description}>
            Test your knowledge with our collection of short, engaging quizzes!
          </p>
        </div>

        <div className={styles.categories}>
          <h2>Choose Your Category</h2>
          <div className={styles.categoryGrid}>
            {categories?.map((category: any) => (
              <Link
                key={category.id}
                href={`/quizzes/${category.id}`}
                className={styles.categoryCard}
              >
                <div className={styles.categoryIcon}>
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className={styles.quizCount}>
                  {category.quizCount} quizzes available
                </span>
              </Link>
            ))}
          </div>

          <div className="  ">
            <div className=" bg-[#d2dcf0] rounded-lg shadow-md p-6 mx-auto">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>1. Choose a category that interests you</p>
                <p>2. Select a quiz from the available options</p>
                <p>3. Answer questions and get immediate feedback</p>
                <p>4. See your final score and learn from explanations</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
