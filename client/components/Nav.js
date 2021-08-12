import Link from 'next/link'

const Nav = () => {
    return (
      <nav>
        <ul>
          <Link href="/">
            <a>
              <li>메인</li>
            </a>
          </Link>
          <Link href="/test">
            <a>
              <li>test</li>
            </a>
          </Link>
        </ul>
      </nav>
    );
}

export default Nav
