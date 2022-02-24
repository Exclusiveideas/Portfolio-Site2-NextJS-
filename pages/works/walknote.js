import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Musicals">
    <Container>
      <Title>
      Musicals <Badge>2011-2016</Badge>
      </Title>
      <P>
      Musicals recommends new music you may like based on your music
        preferences by recognizing your favorite songs stored in your device.
        You can listen to recommended music just like a radio!
      </P>
      <P>
        This service has been closed. Thank you for over 130,000 registered
        users!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://github.com/Exclusiveideas">
            音楽発掘アプリMusicalsクローズのお知らせ{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Objective-C, PHP, MongoDB</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/Exclusiveideas">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『Musicals』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/Exclusiveideas">
            <Badge mr={2}>appbank</Badge>
            Musicals:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/Exclusiveideas">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「Musicals」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="https://github.com/Exclusiveideas">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『Musicals』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="Musicals" />
        <WorkImage src="/images/works/walknote_02.png" alt="Musicals" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_03.png" alt="Musicals" />
      <WorkImage src="/images/works/walknote_04.png" alt="Musicals" />
      <WorkImage src="/images/works/walknote_05.png" alt="Musicals" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
