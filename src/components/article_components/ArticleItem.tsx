export interface Props {
    title: string,
    abstract: string,
    imgSrc : string
}

const ArticleItem = ({title, abstract, imgSrc}: Props) => {
    return (
        <div>
            <h1 className={'pb-2'}>{title}</h1>
            <p>{abstract}</p>
            <img className={'rounded-md shadow-lg shadow-gray-600 hover:scale-105 ease-in duration-150 cursor-pointer pt'}
                 src={imgSrc}/>

        </div>
    );
};

export default ArticleItem;