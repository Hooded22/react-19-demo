export const HomePage = () => {
    const pages = [
        {
            title: "useTransition example",
            description: "Example of form update with and without useTranstion hook",
            page: "use-transition-example"
        },
        {
            title: "Form actions",
            description: "Using <form> actions and useActionState",
            page: "form-actions-example"
        }
    ]

    return (
        <div>
            <ul>
                {pages.map((page) => (
                    <li>
                        <h3>{page.title}</h3>
                        <p>{page.description}</p>
                        <a href={`/${page.page}`}>View</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
