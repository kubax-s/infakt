import { FC } from 'react'
import { Layout } from 'src/components/layout';
import { AccountantsList } from 'src/components/features'
const AccountantsPage: FC = () => {
    return (
        <Layout>
            <AccountantsList />
        </Layout>
    )
}

export default AccountantsPage
