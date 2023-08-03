import { error } from '@sveltejs/kit'

export function load( { params } ) {
  console.log('+page.ts');
  return {
    title: 'Hello World',
    content: 'This is the content of the page'
  };
  throw error( 404, 'Page not found' )
}