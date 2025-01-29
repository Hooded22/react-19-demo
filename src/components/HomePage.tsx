export const HomePage = () => {
    const pages = [
        {
            title: "Action example 1",
            description: "Action example 1",
            page: "actions-example-1"
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
