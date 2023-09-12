import { useEffect, useState, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AccountantType, AccountantResponseType } from 'src/type/accountant.type';
import { getAccountants } from 'src/api';
import { AccountantItem } from 'src/components/features';
import { Button, FlexWrapper, Loading, Typography } from 'src/components/ui';

const AccountantsListWrapper: FC<PropsWithChildren> = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 24px;
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    } 
`

const AccountantsList: FC = () => {
    const [items, setItems] = useState<AccountantType[] | null>(null)
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    const handleGetAccountants = async (page = 1) => {
        setLoading(true);
        const res = await getAccountants(page);
        const data: AccountantResponseType = await res.json();
        setItems(data.results);
        setPage(data.info.page);
        setLoading(false);
    }

    useEffect(() => {
        handleGetAccountants();
    }, [])

    return (
        <>
            <AccountantsListWrapper>
                { items && items.map((item) => <AccountantItem data={item} key={item.login.uuid} />) }
            </AccountantsListWrapper>
            <FlexWrapper $justify="flex-end" $align="center" $gap="24px">
                { loading && <Loading /> }
                <Button onClick={ () => {page > 1 && handleGetAccountants(page - 1)} }>{'<'}</Button>
                <Typography>{page}</Typography>
                <Button onClick={ () => handleGetAccountants(page + 1) }>{'>'}</Button>
            </FlexWrapper>
        </>
    )
}

export default AccountantsList
