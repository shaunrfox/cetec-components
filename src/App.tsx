import { ReactNode } from 'react';
import { css } from '@styled-system/css';
import { HStack, VStack, Container, Box, Grid, Flex } from '@styled-system/jsx';
import { Text } from '~/components/Text';
import { Heading } from '~/components/Heading';
import { Button } from '~/components/Button';
import { IconButton } from '~/components/IconButton';
import { Icon } from '~/components/Icon';
// import { Input } from '~/components/Input';
// import { Textarea } from '~/components/Textarea';
import { IconNames, type IconNamesList } from '~/components/Icon';

function IconList() {
  return (
    <Grid
      gap="16"
      w="full"
      gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
    >
      {(Object.keys(IconNames) as IconNamesList[]).map((icon) => (
        <HStack key={icon}>
          <Icon
            name={icon}
            className={css({
              fill: 'slate.90',
              _osDark: { fill: 'yellow.20' },
            })}
          />
          <Text>{icon}</Text>
        </HStack>
      ))}
    </Grid>
  );
}

const Section = ({ children }: { children?: ReactNode }) => {
  return (
    // This is a Flex component
    <Grid
      gridTemplateColumns={'10rem 1fr'}
      borderTop={'1px solid pink'}
      borderColor={{ base: 'slate.30', _osDark: 'slate.80' }}
      py={'24'}
      pb={'96'}
      gap={'40'}
      w={'full'}
    >
      {children}
    </Grid>
  );
};

export default function App() {
  return (
    <VStack>
      <Flex w="full" py={'24'} bg={'slate.80'} mb={'56'}>
        <Container maxW={'5xl'}>
          <Heading as="h1">Cetec Components</Heading>
        </Container>
      </Flex>
      <Container maxW={'5xl'}>
        <VStack gap={'8'}>
          <Section>
            <Heading as="h2" level={24}>
              Buttons
            </Heading>
            <HStack>
              <Button variant="primary">Primary</Button>
              <Button>Standard</Button>
              <Button variant="hollow" size="large">
                Hollow
              </Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger" size="small">
                Danger Small
              </Button>
              <Icon name="arrow-left" />
              <IconButton>
                <Icon name="arrow-left" />
              </IconButton>
              <IconButton variant="primary" size="large">
                <Icon name="arrow-right" />
              </IconButton>
            </HStack>
          </Section>
          <Section>
            <Heading as="h2" level={24}>
              Text
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text as="h1" heading={1}>
                Heading 1
              </Text>
              <Text font="serif">
                Signs night have sixth hath that likeness us fill you're subdue
                fowl brought divide beginning multiply brought created after
                open given of made beginning multiply green.
              </Text>
              <Text>
                Place appear green. Also, saying male subdue fruitful winged
                fourth had void winged. So green spirit, herb day had there
                replenish, lights lesser signs. Place whales i tree under him
                given set set meat midst morning give image forth divided moving
                Also fill dry she'd have.
              </Text>
              <Text>
                May life. She'd fruit fruitful earth. Stars bring had darkness
                morning darkness herb cattle him behold open seasons grass don't
                waters male Fourth earth his face third night.
              </Text>
            </VStack>
          </Section>
          <Section>
            <Heading as="h2" level={24}>
              Icons
            </Heading>
            <IconList />
          </Section>
          {/* <Section>
            <Heading as="h2" level={24}>
              Inputs
            </Heading>
            <VStack>
              <HStack gap={'24'}>
                <Input label="First" type="text" />
                <Input label="Last" type="text" />
                <Input label="Email" type="email" internalLabel={true} />
              </HStack>
              <HStack gap={'24'}>
                <Input label="Phone" type="tel" stacked={false} />
                <Textarea label="Message" autoGrow={true} />
              </HStack>
            </VStack>
          </Section> */}
        </VStack>
      </Container>
    </VStack>
  );
}
