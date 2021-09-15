export default function Pagination(props) {
    const {page, total, onChange} = props;

    const getPages = () => {
        const results = [];

        for (let i = 0; i < total; i++) {
            let pagee = i +1;
            results.push(
                <a onClick={() => onChange(pagee)}
                   className={page === pagee ? "active" : ''}>
                    {pagee}
                </a>
            );
        }

        /* nueva formade agregar a un arreglo
        {
            Array.apply(0, Array(total)).map(value => {
                results.push(<a className="active"
                                href="#">{page}</a>);
            })
        }
        */
        return results;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {page} of {total}:</span>
                {getPages()}
            </div>
        </div>
    );
}
