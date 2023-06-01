package model;

public class ChavePrivada {
    int d;
    int phi;

    public ChavePrivada(int d, int phi) {
        this.d = d;
        this.phi = phi;
    }

    public int getD() {
        return d;
    }

    public void setD(int d) {
        this.d = d;
    }

    public int getPhi() {
        return phi;
    }

    public void setPhi(int phi) {
        this.phi = phi;
    }
}
