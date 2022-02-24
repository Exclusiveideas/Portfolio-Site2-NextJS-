import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tokyo Mode">
    <Container>
      <Title>
      Tokyo Mode <Badge>2016</Badge>
      </Title>
      <P>The mode magazine for understanding to personally enjoy Japan.</P>
      <P>
        It is one of the projects launched at{' '}
        <Link href="https://github.com/Exclusiveideas" target="_blank">
          Open Innovation Lab <ExternalLinkIcon mx="2px" />
        </Link>
        , aiming to visualize the impact of media contents on the visit of
        foreign high-intellect class to Japan, who are highly interested in
        Japanese culture. I joined the project to build its mobile app for iOS
        where you can read free articles of the magazine.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://github.com/Exclusiveideas">
            ISID Starts a Research Project to Visualize Impact of Media Contents
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://github.com/Exclusiveideas">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/modetokyo_eyecatch.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/modetokyo_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/modetokyo_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/modetokyo_03.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
