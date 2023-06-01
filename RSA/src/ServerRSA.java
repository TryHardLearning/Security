import model.ChavePrivada;
import model.ChavePublica;

public class ServerRSA {
    private int p;
    private int q;

    private int n;

    private int phi;

    private int e;

    private int d;

    private ChavePrivada chavePrivada;
    private ChavePublica chavePublica;

    private int calculaN(int p, int q){
        return p * q;
    }

    private int calculaPhi(int p, int q){
        return (p-1)*(q-1);
    }
    private int buscaE(int phi,int p, int q){
        int primo = 2;
        for(int i=2;i<phi;i++){
            for(int j=2;j<i;j++){
                if(i%j==0){
                    i++;
                }
            }
            if(primo % p != 0 && primo % q != 0){
                return i;
            }
        }
        return primo;
    }

    private int buscaD(int n, int phi, int e){
        for(int d=1;d<n;d++){
            for(int x=1;x<n;x++){
                if(1+(x*phi)/e == d){
                    return d;
                }
            }
        }
        return -1;
    }

    public ChavePublica GeraChavePublica(int p, int q){

        this.q = q;
        this.p = p;

        this.n = calculaN(p,q);
        this.phi = calculaPhi(p,q);

        this.e = buscaE(phi,p,q);

        this.d = buscaD(n,phi,e);

        this.chavePrivada = new ChavePrivada(d,phi);
        this.chavePublica = new ChavePublica(e,phi);


        return this.chavePublica;
    }

    public int msgCripctografada(int msg, ChavePublica chavePublica){
        return (int) (Math.pow(msg,chavePublica.getE()) % chavePublica.getPhi());
    }
    public int msgDesciptografada(int msg){
        return 0;
    }

}
