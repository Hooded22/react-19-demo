import styles from './HomePage.module.css';

export const HomePage = () => {
    const pages = [
        {
            title: "useTransition example",
            description: "Example of form update with and without useTranstion hook",
            page: "use-transition-example",
        },
        {
            title: "Form actions",
            description: "Using <form> actions and useActionState",
            page: "form-actions-example",
        },
        {
            title: "Use Optimistic Example",
            description: "Demonstration of optimistic UI updates using React",
            page: "use-optimistic-example",
        },
    ];

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {pages.map((page) => (
                    <li className={styles['list-item']} key={page.page}>
                        <h3 className={styles.title}>{page.title}</h3>
                        <p className={styles.description}>{page.description}</p>
                        <a className={styles.link} href={`/${page.page}`}>
                            Go to page
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};