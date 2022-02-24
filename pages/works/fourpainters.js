import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The Painters">
    <Container>
      <Title>
        The Painters <Badge>2015</Badge>
      </Title>
      <P>
        A video work generated with deep learning, imitating famous four
        painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
        Hokusai.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, neural-style, Caffe, NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://github.com/Exclusiveideas">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://github.com/Exclusiveideas">
            The four painters: A Video Work Created with Deep Learning{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://github.com/Exclusiveideas">
            Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/Exclusiveideas">
            <Badge mr={2}>Hacker News</Badge>
            The Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/Exclusiveideas">
            <Badge mr={2}>Gigazine</Badge>
            the painters
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/the-four-painters_eyecatch.jpg"
        alt="walknote"
      />
      <WorkImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
      <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
