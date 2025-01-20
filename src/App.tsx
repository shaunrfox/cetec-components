import { ReactNode } from 'react';
import { css } from '@styled-system/css';
import { HStack, VStack, Container, Grid, Flex } from '@styled-system/jsx';
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
              fill: 'gold.30',
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
      borderColor={{ base: 'slate.10', _osDark: 'slate.80' }}
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
      <Flex
        w="full"
        py={'24'}
        bg={{ base: 'slate.10', _osDark: 'slate.80' }}
        mb={'56'}
      >
        <Container maxW={'5xl'}>
          <Text as="h1">Cetec Components</Text>
        </Container>
      </Flex>
      <Container maxW={'5xl'}>
        <VStack gap={'8'}>
          <Section>
            <Text as="h2">Buttons</Text>
            <VStack alignItems={'flex-start'} gap={'24'}>
              <HStack>
                <Button variant="primary">Primary</Button>
                <Button>Standard</Button>
                <Button variant="hollow">Hollow</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="cta">CTA</Button>
                <Button variant="danger">Danger</Button>
              </HStack>
              <HStack>
                <IconButton>
                  <Icon name="arrow-left" />
                </IconButton>
                <IconButton variant="primary" size="large">
                  <Icon name="arrow-right" />
                </IconButton>
              </HStack>
            </VStack>
          </Section>
          <Section>
            <Text as="h2">Text</Text>
            <VStack alignItems={'flex-start'}>
              <HStack gap={'24'}>
                <Text as="h1">Heading 1</Text>
                <code>
                  <Text as="h1">Heading 1</Text>
                </code>
              </HStack>
              <Text as="h2">Heading 2</Text>
              <Text as="h3">Heading 3</Text>
              <Text as="h4">Heading 4</Text>
              <Text font="mono">
                Signs night have sixth hath that likeness us fill you're subdue
                fowl brought divide beginning multiply brought created after
                open given of made beginning multiply green.
              </Text>
              <Text italic>
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
            <Text as="h2">Icons</Text>
            <IconList />
          </Section>
          {/* <Section>
            <Text as="h2">
              Inputs
            </Text>
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
