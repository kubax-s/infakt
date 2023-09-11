import { FC } from 'react'
import { Link } from "react-router-dom";
import { Layout } from 'src/components/layout';

const MainPage: FC = () => {
    return (
        <Layout>
            <Link to="/ksiegowi">Przejdź do listy księgowych</Link>
        </Layout>
    )
}

export default MainPage
