import Ch1Dialog from '@/components/Ch1Dialog';
import { Table } from '@/components/Table';
import { TableTitle } from '@/components/TableTitle';

export default function Home() {
    return (
        <main className="ch1">
            <div>
                <img src="/images/ch1-bg.png" alt="제1장"></img>
                <Ch1Dialog />
                <div className="wrapper">
                    <figure>
                        <TableTitle />
                        <Table />
                    </figure>
                </div>
            </div>
        </main>
    );
}
