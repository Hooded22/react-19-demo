import { FetchingDatalnServerComponent } from "./FetchingDataInServerComponent/FetchingDatalnServerComponent"
import { ServingStaticContent } from "./ServingStaticContent/ServingStaticContent"

export async function ServerComponentsExamples() {
    return (
        <div>
            <h2>Fetching static content</h2>
            <ServingStaticContent />
            <h2>Fetching data in server and combining with client</h2>
            <FetchingDatalnServerComponent />
        </div>
    )
}