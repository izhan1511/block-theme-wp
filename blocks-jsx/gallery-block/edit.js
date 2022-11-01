/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


const Edit = () => {
	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = [ 'core/image', 'core/heading', 'core/gallery' ];
	return (	
		<div { ...blockProps }>			
			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
};
export default Edit;
