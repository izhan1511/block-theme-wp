/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save();
	return (
		<div id={ 'gallery-block' }>
			<div { ...blockProps }>
				<div className={ 'container' }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};
export default Save;
