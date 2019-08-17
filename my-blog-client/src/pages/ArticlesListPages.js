import React from 'react';
import articlesCon from './artical-content';

import ArticlesList from '../components/ArticlesList';


const ArticlesListPages = () =>  (
	
	
    	<>
    	<h1>This is the Articles</h1>
		<ArticlesList articles={articlesCon} />		
		</>
	
);

export default ArticlesListPages;