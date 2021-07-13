import { isEmpty } from 'lodash';
import Link from 'next/link';
import {useState} from 'react';
import PropTypes from 'prop-types';

import { isCustomPageUri } from '../../../utils/slug';
import NavSearch from '../../search/nav-search';

const Nav = ( {header, headerMenus, slug} ) => {

	if ( isEmpty( headerMenus ) ) {
		return null;
	}

	const [ isMenuVisible, setMenuVisibility ] = useState( false );


	return (
		<nav className="flex items-center justify-between flex-wrap bg-link-water-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<Link href="/">
					<a>
						<img src={header?.siteLogoUrl ?? ''} alt="" width="125" height="133" className="md:ml-40"/>
					</a>
				</Link>
				<div className="flex flex-col items-start justify-start">
					
				</div>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={() => setMenuVisibility( ! isMenuVisible )}
					className="flex items-right px-3 py-2 border rounded text-gray-900 border-gray-900  hover:text-white hover:border-white"
					data-cy="mmenu-btn"
				>
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
					</svg>
				</button>
			</div>
			<div className={`${ isMenuVisible ? 'max-h-full' : 'h-0' } overflow-hidden w-full lg:h-full block grid lg:grid lg:items-center lg:w-auto place-items-end space-x-4`}>
				{ headerMenus?.length ? (
					<div className="text-lg lg:flex-grow">
						{ headerMenus?.map( menu => {
							if ( ! isCustomPageUri( menu?.node?.path ) ) {
								return  (
									<Link key={menu?.node.id} href={menu?.node?.path}>
										<a
											className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-20"
											data-cy="nav-item"
										>
											{menu?.node?.label}
										</a>
									</Link>
								);
							}
						} ) }
						
					</div>
				) : null }
			</div>
		</nav>
	);
};

Nav.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string
};

Nav.defaultProps = {
  header: {},
  headerMenus: [],
  slug: ''
};


export default Nav;
