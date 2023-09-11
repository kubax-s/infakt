import { FC } from 'react';
import { AccountantType } from 'src/type/accountant.type';
import { Avatar, Button, Card, FlexWrapper, Typography } from 'src/components/ui';
import { Link } from 'react-router-dom';

interface AccountantItemProps {
    data: AccountantType
}

const AccountantItem: FC<AccountantItemProps> = ({ data })  => {
    return (
        <Card>
            <FlexWrapper $align="center">
                <Avatar src={data.picture.thumbnail} />
                <FlexWrapper $direction="column" $justify="center">
                    <Typography $color="#54585C">{ data.gender === 'female' ? 'Twoja księgowa' : 'Twój księgowy' }</Typography>
                    <Typography $fontSize="24px" $fontWeight="700">{ `${data.name.first} ${data.name.last}` }</Typography>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper $direction="column">
                <Typography $color="#54585C" $fontSize="14px">E-mail</Typography>
                <a href={`mailto:${data.email}`} style={{ color: '#000' }} >{data.email}</a>
            </FlexWrapper>
            <FlexWrapper $direction="column">
                <Typography $color="#54585C" $fontSize="14px">Telefon</Typography>
                <Typography>{ data.cell }</Typography>
            </FlexWrapper>
            <FlexWrapper $direction="column">
                <Typography $color="#54585C" $fontSize="14px">Średnia cena netto usługi / m-c</Typography>
                <Typography>350zł <span>PLN</span></Typography>
            </FlexWrapper>
            <Link to="/">
                <Button>Dowiedz się więcej</Button>
            </Link>
        </Card>
    )
}

export default AccountantItem
