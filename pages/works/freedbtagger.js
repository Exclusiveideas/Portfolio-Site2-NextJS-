import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Audios">
    <Container>
      <Title>
      Audios <Badge>2004-2009</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
      </Center>
      <P>Automatic audio file tagging tool using Audios for Windows</P>
      <P>
        Vorbis/AAC/Monkey's Audio/MPEGplus/FLAC/Twin
       </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows 2000/XP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Delphi</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/Exclusiveideas">
            v1.0.5
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2009/02/16</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/Exclusiveideas">
            <Badge mr={2}>窓の杜</Badge>
            再生時間の組み合わせでアルバムを特定して楽曲情報を取得「Audios」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          User reviews&nbsp;
          <Link
            target="_blank"
            href="https://github.com/Exclusiveideas"
          >
            from Vector
          </Link>
        </Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>FLACにも対応 - よーすけさん</Badge>
          <span>
            音質にこだわってFLACを使用している場合、
            なかなかタグを自動で付けられるソフトはありませんが、
            これはCDDBから曲情報をDLまでしてくれるので、 とてもお手軽簡単です。
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>CDDB対応のタグエディタ - noname_24さん</Badge>
          <span>
            純粋なタグ打ちソフトとしての能力はSuperTagEditorの方が優秀ですがこのソフトはCDDBに対応しているのが最大の利点です
            CDからだけではなくmp3など圧縮後の状態からでも取得できるのですでに作成済みの曲整理が楽になりました
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>昔の曲にタグを入れるに最適 - るるさん</Badge>
          <span>
            最近のリッピングソフトであれば自動で曲名を持ってきてくれますが以前リッピングしたままでタグが付いてない曲にタグを付けるのには最適です。
            参照しているCDDBについてもかなりマイナーなものまで曲名を拾ってくれるのでびっくりします。
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>2 in 1 - マルちゃんさん</Badge>
          <span>
            タグ編集はいろいろなソフトが出ていますが、DBから情報を拾ってくれる機能付では、このソフトが最高です。
            操作も簡単で、手放せません。
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>便利 - Masaki4さん</Badge>
          <span>
            普通CDDBというとCDを入れた状態でデータベースから読み込んでいきますが、このソフトはMP3などのファイルになっていても使えます。（もちろん、CDの通りに曲を並べなければいけませんが・・・）
            ただ、ほんのちょっと不安定さを感じたので４つ...
          </span>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/freedbtagger_01.jpg" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
