import Link from 'next/link'
import {Button, Container, Divider, Dropdown, Icon, Menu, Segment, Visibility} from 'semantic-ui-react'

const TopMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>
        <Link href="/">
          <a>Home Logo</a>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text="About">
          <Dropdown.Menu>
            <Dropdown.Item text="Overview" />
            <Dropdown.Item text="Our Vision" />
            <Dropdown.Item text="Technology" />
            <Dropdown.Item text="Our Team" />
            <Dropdown.Item text="News" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Service">
          <Dropdown.Menu>
            <Link href="/services/web-development">
              <Dropdown.Item text="Web Development" />
            </Link>
            <Dropdown.Item text="Mobile Development" />
            <Dropdown.Item text="Cloud Computing" />
            <Dropdown.Item text="Custom Development" />
            <Dropdown.Item text="Maintenance and Support" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Industry">
          <Dropdown.Menu>
            <Dropdown.Item text="Logistics" />
            <Dropdown.Item text="Retail " />
            <Dropdown.Item text="Warehouse" />
            <Dropdown.Item text="Social Platform" />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as="a">Clients</Menu.Item>
        <Menu.Item as="a">Contact</Menu.Item>
        {/* <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>Sign Up</Button>
        </Menu.Item> */}
      </Menu.Menu>
    </Container>
  </Menu>
)

export default TopMenu
