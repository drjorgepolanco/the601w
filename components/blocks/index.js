

import { BlockBase, BlockContentDouble, BlockContentList, BlockContentSingle } from './general';
import * as Block601w from './the601w';


export const Blocks = (props) => {
  const { blocks } = props;
  return blocks.map((block, index) => {
    const { blockName } = block;
    let key = `${blockName}-${index}`;

    switch(blockName) {

      /* General Blocks */
      case 'ow-blocks/base':
        return <BlockBase { ...props } key={ key } block={ block } />

      case 'ow-blocks/content-double':
        return <BlockContentDouble { ...props } key={ key } block={ block } />

      case 'ow-blocks/content-list':
        return <BlockContentList { ...props } key={ key } block={ block } />

      case 'ow-blocks/content-single':
        return <BlockContentSingle { ...props } key={ key } block={ block } />


      /* The601w Custom Blocks */
      /* --------------------- */
      case 'ow-blocks/the601w-building':
        return <Block601w.Building { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-case-content':
        return <Block601w.CaseContent { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-case-hero':
        return <Block601w.CaseHero { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-contact':
        return <Block601w.Contact { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-cta':
        return <Block601w.CTA { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-home-double':
        return <Block601w.HomeDouble { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-home-hero':
        return <Block601w.HomeHero { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-page-double':
        return <Block601w.PageDouble { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-page-hero':
      return <Block601w.PageHero { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-performance-geography':
        return <Block601w.PerformanceGeography { ...props } key={ key } block={ block } />      
      case 'ow-blocks/the601w-performance-hero':
        return <Block601w.PerformanceHero { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-performance-highlights':
        return <Block601w.PerformanceHighlights { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-performance-list':
        return <Block601w.PerformanceList { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-performance-stats':
        return <Block601w.PerformanceStats { ...props } key={ key } block={ block } />
      case 'ow-blocks/the601w-performance-table':
        return <Block601w.PerformanceTable { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-philosophy-double':
        return <Block601w.PhilosophyDouble { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-portfolio':
        return <Block601w.Portfolio { ...props } key={ key } block={ block } />

      case 'ow-blocks/the601w-post-list':
        return <Block601w.PostList { ...props } key={ key } block={ block } />

        
      default:
        return (blockName) ? <section key={ key } dangerouslySetInnerHTML={{ __html: block.innerHTML }} /> : null;
    }
  })
}