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
        {
            title: "Use API and new Context without provider examples",
            description: "Example showcasing usage of new `use` React API and using context without .Provider",
            page: "use-api-example",
        },
        {
            title: "Ref as Props",
            description: "Example showcasing usage of ref as component prop withour forwardRef",
            page: "ref-as-prop-example",
        },
        {
            title: "Metadata in component",
            description: "This page has different page title and icon thanks to metadata added directly in react component",
            page: "metadata-example",
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